
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// פתיחה/סגירה של התפריט על ידי לחיצה על כפתור ההמבורגר
hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// סגירת התפריט כאשר לוחצים מחוץ לתפריט
document.addEventListener('click', (e) => {
  // בדיקה אם הלחיצה לא הייתה על התפריט ולא על כפתור ההמבורגר
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('active');
  }
});

// מחוות החלקה במכשירים ניידים
let startX = 0;
let endX = 0;

// זיהוי תחילת מגע
menu.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

// זיהוי סוף מגע
menu.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;

  // אם יש החלקה מימין לשמאל (החלקה משמעותית)
  if (endX > startX + 50) {
    menu.classList.remove('active'); // סגירת התפריט
  }
});

