const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve('"kal sy pkka parhonga resolved"');
    } else {
      resolve("Aj sy pkka parhonga reject");
    }
  }, 1000);
});

promiseOne
  .then(function (user) {
    console.log(user);
  })
  .catch(function (error) {
    console.log(error);
  });

// async function consumePromiseOne() {
//   try {
//     const response = await promiseOne;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseOne();
