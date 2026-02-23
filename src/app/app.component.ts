import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf
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
      <h1 class="typing-text">{{ displayText }} Talks Menorca 2026</h1>
      <!-- Event details with fade-in effect -->
      <div *ngIf="showEventDetails" class="event-details">
        <p>20 y 21 de Marzo</p>
        <p>Centre Bit Menorca</p>
      </div>

      <div class="container">
        <!-- 400 .trigger elements -->
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>

        <div class="monitor">
          <div class="camera o-x">
            <div class="camera o-y">
              <div class="camera o-z">
                <div class="vr">
                  <!-- 20 .vr_layer elements -->
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <div class="vr_layer">
                    <div class="vr_layer_item"></div>
                  </div>
                  <!-- 20 .vr_layer divs are now created -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
    <app-home id="about"></app-home>
    <app-speakers id="speakers"></app-speakers>
    <!-- <app-schedule id="schedule"></app-schedule> -->
    <app-map id="map"></app-map>
    <app-gdg id="gdg"></app-gdg>
    <app-sponsors id="sponsors"></app-sponsors>
    <app-faq id="faq"></app-faq>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss'],

  imports: [HomeComponent, CommonModule, NavBarComponent, SpeakersComponent, ScheduleComponent, MapComponent, GdgComponent, SponsorsComponent, FaqComponent, ContactComponent, FooterComponent]
})

export class AppComponent implements OnInit {
  words = ["SCIENCE", "TECHNOLOGY", "MATHEMATICS", "ENGINEERING", "STEM"];
  displayText = '';
  wordIndex = 0;
  letterIndex = 0;
  isDeleting = false;
  typingSpeed = 80;
  isCompleted = false;
  showEventDetails = false;

  constructor(private ngZone: NgZone) { }


  ngOnInit() {
    this.type();
  }

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
          setTimeout(() => this.showEventDetails = true, 200); // Show event details 1 second after typing completes
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
