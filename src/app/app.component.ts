import { Component, OnInit, NgZone, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MapComponent } from './map/map.component';
import { GdgComponent } from './gdg/gdg.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <app-nav-bar></app-nav-bar>
    <div class="fullscreen" id="home">
      <canvas #lightCanvas class="light-canvas"></canvas>
      <h1 class="title-text"><span class="typing-cursor">{{ displayText }}</span> Talks Menorca 2026</h1>
      <!-- Event details with fade-in effect -->
      <div *ngIf="showEventDetails" class="event-details">
        <p>19 de marzo en la Oficina Acelera Pyme Menorca - Es Mercadal</p>
        <p>20 de marzo en Estació Marítima - Port de Maó</p>
      </div>
    </div>
    <app-home id="about"></app-home>
    <app-speakers id="speakers"></app-speakers>
    <app-schedule id="schedule"></app-schedule>
    <app-map id="map"></app-map>
    <app-gdg id="gdg"></app-gdg>
    <app-sponsors id="sponsors"></app-sponsors>
    <app-faq id="faq"></app-faq>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss'],

  imports: [HomeComponent, CommonModule, NavBarComponent, SpeakersComponent, ScheduleComponent, MapComponent, GdgComponent, SponsorsComponent, FaqComponent, ContactComponent, FooterComponent]
})

export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('lightCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  words = ["SCIENCE", "TECHNOLOGY", "ENGINEERING", "MATHEMATICS", "STEM"];
  displayText = '';
  wordIndex = 0;
  letterIndex = 0;
  isDeleting = false;
  typingSpeed = 80;
  isCompleted = false;
  showEventDetails = false;

  private ctx!: CanvasRenderingContext2D;
  private animFrameId = 0;
  private nodes: PathNode[] = [];
  private segments: PathSegment[] = [];
  private pulses: LightPulse[] = [];
  private mouseX = 0;
  private mouseY = 0;
  private targetOffsetX = 0;
  private targetOffsetY = 0;
  private currentOffsetX = 0;
  private currentOffsetY = 0;
  private canvasW = 0;
  private canvasH = 0;
  private resizeHandler = () => this.handleResize();
  private mouseMoveHandler = (e: MouseEvent) => this.handleMouseMove(e);

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    this.type();
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.initCanvas();
      window.addEventListener('resize', this.resizeHandler);
      window.addEventListener('mousemove', this.mouseMoveHandler);
      this.animate();
    });
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animFrameId);
    window.removeEventListener('resize', this.resizeHandler);
    window.removeEventListener('mousemove', this.mouseMoveHandler);
  }

  // ─── Canvas Animation ──────────────────────────────────────────

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.handleResize();
    this.generateNetwork();
  }

  private handleResize() {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement!;
    this.canvasW = parent.clientWidth;
    this.canvasH = parent.clientHeight;
    canvas.width = this.canvasW;
    canvas.height = this.canvasH;
    // Regenerate network on resize to fill the space
    this.nodes = [];
    this.segments = [];
    this.pulses = [];
    this.generateNetwork();
  }

  private handleMouseMove(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  private generateNetwork() {
    const w = this.canvasW;
    const h = this.canvasH;
    if (w === 0 || h === 0) return;

    // Create nodes on a loose grid with jitter
    const cols = 10;
    const rows = 6;
    const cellW = w / cols;
    const cellH = h / rows;

    for (let r = 0; r <= rows; r++) {
      for (let c = 0; c <= cols; c++) {
        const jitterX = (Math.random() - 0.5) * cellW * 0.6;
        const jitterY = (Math.random() - 0.5) * cellH * 0.6;
        this.nodes.push({
          x: c * cellW + jitterX,
          y: r * cellH + jitterY,
          col: c,
          row: r,
          connections: []
        });
      }
    }

    // Connect nodes: right, down, and diagonal (with probability)
    for (let r = 0; r <= rows; r++) {
      for (let c = 0; c <= cols; c++) {
        const idx = r * (cols + 1) + c;
        const node = this.nodes[idx];

        // Connect right
        if (c < cols && Math.random() > 0.15) {
          const rightIdx = idx + 1;
          this.addSegment(idx, rightIdx);
        }
        // Connect down
        if (r < rows && Math.random() > 0.25) {
          const downIdx = idx + (cols + 1);
          this.addSegment(idx, downIdx);
        }
        // Connect diagonal down-right
        if (c < cols && r < rows && Math.random() > 0.65) {
          const diagIdx = idx + (cols + 1) + 1;
          this.addSegment(idx, diagIdx);
        }
        // Connect diagonal down-left
        if (c > 0 && r < rows && Math.random() > 0.75) {
          const diagIdx = idx + (cols + 1) - 1;
          this.addSegment(idx, diagIdx);
        }
      }
    }

    // Spawn initial pulses
    for (let i = 0; i < 18; i++) {
      this.spawnPulse();
    }
  }

  private addSegment(fromIdx: number, toIdx: number) {
    const seg: PathSegment = {
      from: fromIdx,
      to: toIdx,
      length: 0
    };
    const n1 = this.nodes[fromIdx];
    const n2 = this.nodes[toIdx];
    seg.length = Math.hypot(n2.x - n1.x, n2.y - n1.y);
    this.segments.push(seg);
    n1.connections.push(this.segments.length - 1);
    n2.connections.push(this.segments.length - 1);
  }

  private spawnPulse() {
    if (this.segments.length === 0) return;
    const segIdx = Math.floor(Math.random() * this.segments.length);
    const seg = this.segments[segIdx];
    const forward = Math.random() > 0.5;

    // Random color from STEM palette
    const colors = [
      { r: 0, g: 200, b: 255 },   // cyan
      { r: 120, g: 80, b: 255 },   // purple
      { r: 0, g: 220, b: 130 },    // green
      { r: 255, g: 180, b: 40 },   // gold
      { r: 255, g: 70, b: 120 },   // magenta
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    this.pulses.push({
      segmentIdx: segIdx,
      progress: 0,
      speed: 0.3 + Math.random() * 0.5,
      forward: forward,
      color: color,
      trailLength: 0.25 + Math.random() * 0.2,
      alive: true,
      brightness: 0.7 + Math.random() * 0.3
    });
  }

  private animate() {
    this.update();
    this.draw();
    this.animFrameId = requestAnimationFrame(() => this.animate());
  }

  private update() {
    // Parallax offset
    this.targetOffsetX = (this.mouseX - this.canvasW / 2) * 0.015;
    this.targetOffsetY = (this.mouseY - this.canvasH / 2) * 0.015;
    this.currentOffsetX += (this.targetOffsetX - this.currentOffsetX) * 0.05;
    this.currentOffsetY += (this.targetOffsetY - this.currentOffsetY) * 0.05;

    // Update pulses
    for (const pulse of this.pulses) {
      if (!pulse.alive) continue;
      pulse.progress += pulse.speed * 0.01;

      if (pulse.progress >= 1) {
        // Pulse reached end of segment - find a new path
        const seg = this.segments[pulse.segmentIdx];
        const arrivalNode = pulse.forward ? seg.to : seg.from;
        const node = this.nodes[arrivalNode];

        // Pick a random connected segment (different from current)
        const options = node.connections.filter(si => si !== pulse.segmentIdx);
        if (options.length > 0) {
          const nextSegIdx = options[Math.floor(Math.random() * options.length)];
          const nextSeg = this.segments[nextSegIdx];
          pulse.segmentIdx = nextSegIdx;
          pulse.progress = 0;
          pulse.forward = nextSeg.from === arrivalNode;
        } else {
          // Dead end - reverse
          pulse.progress = 0;
          pulse.forward = !pulse.forward;
        }
      }
    }

    // Spawn new pulses occasionally to keep density
    if (Math.random() < 0.02 && this.pulses.length < 35) {
      this.spawnPulse();
    }

    // Remove old excess pulses
    if (this.pulses.length > 40) {
      this.pulses = this.pulses.slice(-35);
    }
  }

  private draw() {
    const ctx = this.ctx;
    const w = this.canvasW;
    const h = this.canvasH;

    // Clear
    ctx.clearRect(0, 0, w, h);

    ctx.save();
    ctx.translate(this.currentOffsetX, this.currentOffsetY);

    // Draw segments (dim base lines)
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(100, 160, 220, 0.08)';
    ctx.beginPath();
    for (const seg of this.segments) {
      const n1 = this.nodes[seg.from];
      const n2 = this.nodes[seg.to];
      ctx.moveTo(n1.x, n1.y);
      ctx.lineTo(n2.x, n2.y);
    }
    ctx.stroke();

    // Draw junction dots
    ctx.fillStyle = 'rgba(100, 180, 255, 0.12)';
    for (const node of this.nodes) {
      if (node.connections.length > 0) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Draw pulses
    for (const pulse of this.pulses) {
      if (!pulse.alive) continue;
      const seg = this.segments[pulse.segmentIdx];
      const n1 = this.nodes[pulse.forward ? seg.from : seg.to];
      const n2 = this.nodes[pulse.forward ? seg.to : seg.from];

      const headT = pulse.progress;
      const tailT = Math.max(0, pulse.progress - pulse.trailLength);

      const headX = n1.x + (n2.x - n1.x) * headT;
      const headY = n1.y + (n2.y - n1.y) * headT;
      const tailX = n1.x + (n2.x - n1.x) * tailT;
      const tailY = n1.y + (n2.y - n1.y) * tailT;

      const { r, g, b } = pulse.color;
      const bri = pulse.brightness;

      // Trail gradient
      const grad = ctx.createLinearGradient(tailX, tailY, headX, headY);
      grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
      grad.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${0.4 * bri})`);
      grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${0.9 * bri})`);

      ctx.lineWidth = 2.5;
      ctx.strokeStyle = grad;
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(headX, headY);
      ctx.stroke();

      // Glow at head
      const glowGrad = ctx.createRadialGradient(headX, headY, 0, headX, headY, 12);
      glowGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${0.6 * bri})`);
      glowGrad.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${0.15 * bri})`);
      glowGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(headX, headY, 12, 0, Math.PI * 2);
      ctx.fill();

      // Bright core dot
      ctx.fillStyle = `rgba(255, 255, 255, ${0.7 * bri})`;
      ctx.beginPath();
      ctx.arc(headX, headY, 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Subtle glow on the segment the pulse is on
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.06 * bri})`;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(n1.x, n1.y);
      ctx.lineTo(n2.x, n2.y);
      ctx.stroke();
    }

    ctx.restore();
  }

  // ─── Typing Effect ─────────────────────────────────────────────

  type() {
    if (this.isCompleted) return;

    const currentWord = this.words[this.wordIndex];
    const fullText = currentWord;

    if (!this.isDeleting && this.letterIndex < fullText.length) {
      // Typing forward
      this.displayText += fullText.charAt(this.letterIndex);
      this.letterIndex++;
      setTimeout(() => this.type(), this.typingSpeed);
    } else if (this.isDeleting && this.letterIndex > 0) {
      // Deleting
      this.displayText = fullText.substring(0, this.letterIndex - 1);
      this.letterIndex--;
      setTimeout(() => this.type(), this.typingSpeed / 2);
    } else if (!this.isDeleting && this.letterIndex === fullText.length) {
      // If we're on the last word, stop animation after typing it fully
      if (this.wordIndex === this.words.length - 1) {
        this.isCompleted = true;
        console.log("Typing completed. Displaying event details...");
        this.ngZone.run(() => {
          setTimeout(() => this.showEventDetails = true, 200);
        });
      } else {
        this.isDeleting = true;
        setTimeout(() => this.type(), 1000);
      }
    } else if (this.isDeleting && this.letterIndex === 0) {
      // Move to the next word
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      setTimeout(() => this.type(), 500);
    }
  }
}

// ─── Interfaces ────────────────────────────────────────────────

interface PathNode {
  x: number;
  y: number;
  col: number;
  row: number;
  connections: number[];
}

interface PathSegment {
  from: number;
  to: number;
  length: number;
}

interface LightPulse {
  segmentIdx: number;
  progress: number;
  speed: number;
  forward: boolean;
  color: { r: number; g: number; b: number };
  trailLength: number;
  alive: boolean;
  brightness: number;
}
