const elemList = document.querySelector("#categories");
const elemItem = elemList.querySelectorAll(".item");

console.log(`Number of category: ${elemItem.length}`);

elemItem.forEach((item) => {
  const textTitle = item.querySelector("h2").textContent;
  const elemSum = item.querySelectorAll("li").length;

  console.log(`Category: ${textTitle}`);
  console.log(`Elements: ${elemSum}`);
});
