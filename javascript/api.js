//Our first API request.
let url = "https://catfact.ninja/fact";


fetch(url)                       // 1. First request
  .then((res) => res.json())     // 2. Parse response as JSON
  .then((data) => {
    console.log("data1 = ", data.fact);  // 3. Log first fact
    return fetch(url);           // 4. Trigger second request
  })
  .then((res) => res.json())     // 5. Parse second response
  .then((data2) => {
    console.log("data2 = ", data2.fact); // 6. Log second fact
  })
  .catch((err) => {
    console.log("ERROR - ", err); // 7. Handle errors
  });

  //using async and await
  let url1 = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    // First request
    const res1 = await fetch(url1);
    const data1 = await res1.json();
    console.log("data1 =", data1.fact);

    // Second request
    const res2 = await fetch(url1);
    const data2 = await res2.json();
    console.log("data2 =", data2.fact);

  } catch (err) {
    console.error("ERROR -", err);
  }
}

getFacts();