import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["preview"];
  drawing = false;
  startX = 0;
  startY = 0;
  rect = {};

  connect() {
    console.log("Picture controller connected");
    this.canvas = this.previewTarget.querySelector('#pictureCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.addEventListener('mousedown', this.startDrawing.bind(this));
    this.canvas.addEventListener('mousemove', this.draw.bind(this));
    this.canvas.addEventListener('mouseup', this.endDrawing.bind(this));
  }

  previewPicture() {
    let input = this.element.querySelector('input[type="file"]'); // Directly select the input
    let preview = this.previewTarget; // Use the target you've declared
    if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = (event) => {
        let img = new Image();
        img.onload = () => {
          this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
        }
        img.src = event.target.result;
      }

      reader.readAsDataURL(input.files[0]);
    }
  }

  startDrawing(e) {
    this.drawing = true;
    this.startX = e.offsetX;
    this.startY = e.offsetY;
  }

  draw(e) {
    if (!this.drawing) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear previous drawing
    this.ctx.beginPath();
    let currentX = e.offsetX;
    let currentY = e.offsetY;
    let width = currentX - this.startX;
    let height = currentY - this.startY;
    this.ctx.rect(this.startX, this.startY, width, height);
    this.ctx.stroke();
    this.rect = { startX: this.startX, startY: this.startY, width: width, height: height }; // Save rectangle data
  }

  endDrawing() {
    this.drawing = false;
    // Here, you might want to do something with the rectangle coordinates, like storing them for sending to the backend.
    console.log("Rect coords:", this.rect);
  }
  // Inside your Stimulus controller
  submitForm(event) {
    event.preventDefault(); // Stop the form from submitting immediately

    let form = this.element.querySelector('form');
    let rectCoords = ['startX', 'startY', 'width', 'height'];

    // Remove any existing hidden rectangle inputs before adding new ones
    rectCoords.forEach(coord => {
      let existingInput = form.querySelector(`input[name="rectangle[${coord}]"]`);
      if (existingInput) {
        existingInput.remove();
      }
    });

    rectCoords.forEach(coord => {
      let input = document.createElement('input');
      input.type = 'hidden';
      input.name = `rectangle[${coord}]`;
      input.value = this.rect[coord];
      form.appendChild(input);
    });

    form.submit(); // Now submit the form with the new hidden inputs
  }
}



