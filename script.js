// 教師名單
const teachers = [
  "王老師",
  "李老師",
  "陳老師",
  "張老師",
  "林老師"
];

// 時段設定
const periods = [
  "第一節",
  "第二節",
  "第三節",
  "第四節",
  "第五節"
];

// 已排課結果 (index 對應時段)
let assignedSchedule = Array(periods.length).fill(null);

// 初始化課表
window.onload = function () {
  const scheduleBody = document.getElementById("scheduleBody");
  scheduleBody.innerHTML = "";
  periods.forEach((period, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${period}</td>
      <td id="teacher-${index}">未排課</td>
    `;
    scheduleBody.appendChild(row);
  });
};

// 抽選教師
function drawTeacher() {
  // 檢查是否排完
  if (assignedSchedule.every(t => t !== null)) {
    alert("所有時段都已排課完成！");
    return;
  }

  // 找第一個還沒排課的時段
  const index = assignedSchedule.findIndex(t => t === null);

  let teacher;
  do {
    teacher = teachers[Math.floor(Math.random() * teachers.length)];
  } while (assignedSchedule.includes(teacher));

  assignedSchedule[index] = teacher;

  // 更新顯示
  document.getElementById(`teacher-${index}`).textContent = teacher;
  document.getElementById("result").textContent = `抽中：${periods[index]} → ${teacher}`;
}

// 重置課表
function resetDraw() {
  assignedSchedule = Array(periods.length).fill(null);
  document.getElementById("result").textContent = "尚未抽選";

  periods.forEach((_, index) => {
    document.getElementById(`teacher-${index}`).textContent = "未排課";
  });
}
