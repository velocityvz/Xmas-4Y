@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(135deg, #0a0f1f, #152445);
  color: white;
  overflow-x: hidden;
}

canvas#snow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.container {
  text-align: center;
  padding: 40px;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.8;
  margin-bottom: 30px;
}

.present {
  cursor: pointer;
  animation: bounce 2.5s infinite;
}

.present-img {
  width: 220px;
}

.click-text {
  margin-top: 10px;
  opacity: 0.7;
}

.hidden {
  display: none;
}

.card {
  margin: 25px auto;
  padding: 25px;
  width: 90%;
  max-width: 450px;
  border-radius: 20px;
}

.glass {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.2);
}

.code {
  font-size: 1.4rem;
  margin-top: 10px;
  letter-spacing: 2px;
  font-weight: 700;
}

/* Animations */

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.fade-in {
  animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
