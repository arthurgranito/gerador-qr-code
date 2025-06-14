# Simple QR Code Generator

This project is a simple and responsive QR code generator built using pure HTML, CSS, and JavaScript. It allows users to input text or a URL, select the desired size for the QR code image, and then generate and download the QR code as a JPG file.

## Features

* **Generate QR Codes:** Create QR codes from any text or URL.
* **Selectable Size:** Choose from various sizes (100x100 to 1000x1000 pixels) for the generated QR code image.
* **Download as JPG:** Easily download the generated QR code image in JPG format.
* **Responsive Design:** The application adapts to different screen sizes, providing a seamless experience on desktops and mobile devices.
* **Pure Client-Side Implementation:** Built entirely with HTML, CSS, and JavaScript, meaning no server-side processing is required.

## Screenshots

**Desktop View (Generated QR Code):**

![Desktop View with Generated QR Code](./assets/image3.png)

**Desktop View (Initial State):**

![Desktop View Initial State](./assets/image2.png)

**Mobile View (Generated QR Code):**

![Mobile View with Generated QR Code](./assets/image1.png)

## Technologies Used

* HTML: For structuring the web page and its elements.
* CSS: For styling the application and ensuring its responsiveness.
* JavaScript: For handling user input, generating the QR code using the `qrcodejs` library, and enabling the download functionality.
* [qrcodejs](https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js): A JavaScript library used to generate the QR code images.

## How to Use

1.  **Open in Browser:** Open the `index.html` file in your web browser.
2.  **Enter Text or URL:** In the input field labeled "Enter your text or URL", type or paste the content you want to encode into a QR code.
3.  **Select Size:** Use the "Select the size:" dropdown menu to choose the desired dimensions (in pixels) for the QR code image.
4.  **Generate:** Click the "Generate" button. The QR code will be generated and displayed below the button.
5.  **Download:** Once the QR code is generated, a "Download" button will appear. Click this button to download the QR code image as a `QR_Code.jpg` file to your device.

## Author

This simple QR code generator was created by Arthur Granito.

## License

This project is open-source. Feel free to use and modify it according to your needs. (You can add a specific license here if you have one, e.g., MIT License).