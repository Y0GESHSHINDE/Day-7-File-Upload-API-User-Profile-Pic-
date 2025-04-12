# 📸 File Upload API - Node.js, Express & MongoDB

Welcome to **Day 7** of my **10 Days of Node.js/Express/MongoDB** series!

This project is a **File Upload API** that allows users to upload profile pictures. It demonstrates handling file uploads, storing image paths in MongoDB, and serving uploaded images as static files.

---

## 🚀 Features

- ➕ Upload profile pictures for users
- 📂 Store image paths in MongoDB
- 🌐 Serve uploaded images statically
- ✅ Only accept `.jpg`, `.jpeg`, `.png` images
- 🛠️ Modular API design with Express

---

## 🧠 Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (for file uploads)
- dotenv (for environment variables)

---

## 📁 Folder Structure

```
file-upload-api/
├── controllers/
│   └── uploadController.js
├── models/
│   └── User.js
├── routes/
│   └── upload.js
├── uploads/             # Folder to store uploaded images
├── .env
├── server.js
├── package.json
└── README.md
```

---

## 📦 Installation & Setup

1. **Clone the repo**
```bash
git clone https://github.com/Y0GESHSHINDE/file-upload-api.git
cd file-upload-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env` file**
```
MONGO_URI=mongodb://127.0.0.1:27017/fileUploadDB
PORT=5000
```

4. **Start the server**
```bash
npm run dev
```

App runs at:  
👉 `http://localhost:5000`

---

## 📬 API Endpoints

### 📸 Upload Routes

| Method | Endpoint                | Description                          |
|--------|-------------------------|--------------------------------------|
| POST   | `/upload/:username`      | Upload a profile picture for user   |

---

## 🧪 Sample JSON

**Add Profile Picture**
- **Request (Postman)**:
  - Method: `POST`
  - URL: `http://localhost:5000/upload/<username>`
  - Body (form-data):
    - Key: `profilePic` (File)
    - Value: *Choose an image file (e.g., PNG, JPG)*

---

## 🔍 Query Options

Once the image is uploaded, you can access it via the static URL:  
```
http://localhost:5000/uploads/<filename>
```

---

## 🧠 Learning Goal

This project teaches:
- Handling file uploads using **Multer**
- Storing file paths in **MongoDB**
- Serving static files in Express
- Building modular APIs in Express

---

## 📬 Testing with Postman

1. Open [Postman](https://www.postman.com/)
2. Use base URL: `http://localhost:5000/upload/<username>`
3. Test:
   - `POST` to upload profile pictures

---

## 👨‍💻 Author

**Yogesh Shinde**  
📧 yogeshshinde3624@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/y0geshshinde)  
🐙 [GitHub](https://github.com/y0geshshinde)

