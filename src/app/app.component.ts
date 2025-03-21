import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Clipboard } from 'ts-clipboard';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  constructor() {
    // Light and Dark Theme Switch
    document.documentElement.setAttribute('data-bs-theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  slidervalue = 1;
  public letters = false;
  public uppercase = false;
  public lowercase = false;
  public numbers = false;
  public symbols = false;

  passwordvalue = "";
  lowercasechars = "abcdefghijklmnopqrstuvwxyz";
  uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  numberschars = "1234567890";
  symbolschar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  
  GeneratePassword() {
    
    let password = "";
    let characters = "";

    if (this.slidervalue <= 0) { this.slidervalue = 1; }
    
    if (this.uppercase) { characters += this.uppercasechars; }
    if (this.lowercase) { characters += this.lowercasechars; }
    if (this.numbers) { characters += this.numberschars; }
    if (this.symbols) { characters += this.symbolschar; }

    if (characters.length <= 0) {
      characters += this.uppercasechars;
      characters += this.lowercasechars;
    }
    

    for (let i = 0; i < this.slidervalue; i++) { password += characters[Math.floor(Math.random() * characters.length)]; }

    this.passwordvalue = password;

  }

  CopyText(text : string) { Clipboard.copy(text); }

  UpdateValue(event: Event) {
    const inputelement = event.target as HTMLInputElement;
    this.slidervalue = inputelement.valueAsNumber;
  }
}