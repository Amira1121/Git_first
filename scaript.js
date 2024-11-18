// تعريف مصفوفة تحتوي على الاقتباسات
var quotes = [
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Your limitation—it's only your imagination.", author: "Unknown" },
    { text: "“Always forgive your enemies; nothing annoys them so much.”", author: "Oscar Wilde" },
    { text: "“It does not do to dwell on dreams and forget to live.”", author: "J.K. Rowling, Harry Potter and the Sorcerer's Stone" },
    { text: "“Good friends, good books, and a sleepy conscience: this is the ideal life.”", author: "Mark Twain" },
    { text: "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”", author: "John Green, The Fault in Our Stars" },
    { text: "“I solemnly swear that I am up to no good.”", author: "Unknown" },
    { text: "Your limitation—it's only your imagination.", author: "Unknown" },
    { text: "“The man who does not read has no advantage over the man who cannot read.”", author: "Mark Twain" },
    { text: "Your limitation—it's only your imagination.", author: "Unknown" },
    { text: "Your limitation—it's only your imagination.", author: "Unknown" },
    { text: "“I have not failed. I've just found 10,000 ways that won't work.”", author: "Thomas A. Edison" },
    { text: "“Life is what happens to us while we are making other plans.”", author: "Allen Saunders" },
    { text: "“We are all in the gutter, but some of us are looking at the stars.”", author: "Oscar Wilde, Lady Windermere's Fan" },
];

// الحصول على عناصر HTML
var quoteText = document.getElementById("quote");
var newQuoteBtn = document.getElementById("new-quote");

// إضافة حدث النقر على الزر
newQuoteBtn.addEventListener("click", function() {
    // توليد رقم عشوائي بين 0 وطول المصفوفة - 1
    var randomIndex = Math.floor(Math.random() * quotes.length);
    // تحديث نص الاقتباس
    quoteText.textContent = quotes[randomIndex].text + " — " + " - " + quotes[randomIndex].author;
});
