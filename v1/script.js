const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//Selecting DOM elements
const form = document.querySelector(".fact-form");
const shareAFactBtn = document.querySelector(".share-a-fact");
const factsList = document.querySelector(".facts-list");

const votesInterestingBtn = document.querySelector(".vote-interesting");
const votesMindblowingBtn = document.querySelector(".vote-mindblowing");
const votesFalseBtn = document.querySelector(".vote-false");

//clear List immediately
factsList.innerHTML = "";
createFactsList(initialFacts);

//Load data from Supabase
const loadFacts = async () => {
  const res = await fetch(
    "https://fyhypjvywkhhukfecqsj.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5aHlwanZ5d2toaHVrZmVjcXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMwNzU2NDksImV4cCI6MTk4ODY1MTY0OX0.OdnSPfIbj7MNgiYwOXLIjrVlGMbKn1W0LouEwbFncxk",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5aHlwanZ5d2toaHVrZmVjcXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMwNzU2NDksImV4cCI6MTk4ODY1MTY0OX0.OdnSPfIbj7MNgiYwOXLIjrVlGMbKn1W0LouEwbFncxk",
      },
    }
  );

  const data = await res.json();
  //   const filteredData = data.filter((fact) => fact.category === "society");
  createFactsList(data);
};

loadFacts();

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
                <p>
                   ${fact.text}
                    <a
                      class="source"
                      href="${fact.source}"
                      target="_blank"
                      >(Source)</a
                    >
                </p>
                <span class="tag" style="background-color: ${
                  CATEGORIES.find((element) => element.name === fact.category)
                    .color
                }"
                >${fact.category}</span>
      </li>`
  );

  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

//share a fact / close button logic (toggle form)
shareAFactBtn.addEventListener("click", function () {
  form.classList.toggle("hidden");
  shareAFactBtn.textContent = !form.classList.contains("hidden")
    ? "close"
    : "share a fact";
});

console.dir(shareAFactBtn);
