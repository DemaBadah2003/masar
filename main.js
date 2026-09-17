// قائمة درجات الطلاب
let grades = [85, 45, 60, 92, 38, 70, 55, 100, 65, 40];

// متغيرات لتخزين النتائج
let passedCount = 0;
let failedCount = 0;
let totalGrades = 0;

// اللوب اللي بيمر على كل درجة
for (let i = 0; i < grades.length; i++) {
  let grade = grades[i];

  // نجمع الدرجة على الإجمالي
  totalGrades += grade;

  // نتحقق: ناجح ولا راسب؟
  if (grade >= 60) {
    passedCount++;
    console.log(`الطالب رقم ${i + 1}: الدرجة ${grade} - ناجح ✅`);
  } else {
    failedCount++;
    console.log(`الطالب رقم ${i + 1}: الدرجة ${grade} - راسب ❌`);
  }
}

// حساب المتوسط
let averageGrade = totalGrades / grades.length;

// عرض النتائج النهائية
console.log("---------------------------");
console.log("عدد الطلاب الناجحين:", passedCount);
console.log("عدد الطلاب الراسبين:", failedCount);
console.log("إجمالي الدرجات:", totalGrades);
console.log("متوسط الدرجات:", averageGrade.toFixed(2));