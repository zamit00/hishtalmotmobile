const hamburger = document.getElementById('hamburger');
const xsign = document.getElementById('xsign');
const menu = document.getElementById('menu');

// פתיחה/סגירה של התפריט על ידי לחיצה על כפתור ההמבורגר
hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// סגירת התפריט על ידי לחיצה על כפתור ה-xsign
xsign.addEventListener('click', () => {
  menu.classList.remove('active');
});

// סגירת התפריט כאשר לוחצים מחוץ לתפריט
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('active');
  }
});

// מחוות החלקה במכשירים ניידים
let startX = 0;
let endX = 0;

menu.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

menu.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;

  if (endX > startX + 50) {
    menu.classList.remove('active');
  }
});

// סגירת התפריט כאשר הדף לא גלוי
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    menu.classList.remove('active');
  }
});
