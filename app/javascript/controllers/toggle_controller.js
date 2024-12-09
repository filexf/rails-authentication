import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr";


// Connects to data-controller="toggle"
export default class extends Controller {

  static targets = ["togglableElement"]

  // connect() {
  //   console.log("hello from the toggle controller!")

  // }

  fire() {
    this.togglableElementTarget.classList.toggle("d-none");
  }
}
