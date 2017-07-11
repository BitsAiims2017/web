import low from "lowdb";
const fakeDB = low();

fakeDB
  .defaults({
    data: [
      {
        id: "1",
        name: "admin",
        username: "admin",
        password: "password1",
        role: "admin",
        date: "some date"
      },
      {
        id: "2",
        name: "admin2",
        username: "admin2",
        password: "password2",
        role: "admin",
        date: "some other date"
      },
      {
        id: "3",
        name: "admin3",
        username: "admin3",
        password: "password3",
        role: "admin",
        date: "bla bla date"
      },
      {
        name: "Cupcake",
        calories: "305",
        fat: "3.7",
        carbs: "67",
        protein: "4.3",
        sodium: "413",
        calcium: "3%",
        iron: "8%"
      },
      {
        name: "Gingerbread",
        calories: "356",
        fat: "16.0",
        carbs: "49",
        protein: "3.9",
        sodium: "327",
        calcium: "7%",
        iron: "16%"
      },
      {
        name: "Jelly bean",
        calories: "375",
        fat: "0.0",
        carbs: "94",
        protein: "0.0",
        sodium: "50",
        calcium: "0%",
        iron: "0%"
      },
      {
        name: "Lollipop",
        calories: "392",
        fat: "0.2",
        carbs: "98",
        protein: "0.0",
        sodium: "38",
        calcium: "0%",
        iron: "2%"
      },
      {
        name: "Honeycomb",
        calories: "408",
        fat: "3.2",
        carbs: "87",
        protein: "6.5",
        sodium: "562",
        calcium: "0%",
        iron: "45%"
      },
      {
        name: "Donut",
        calories: "452",
        fat: "25.0",
        carbs: "51",
        protein: "4.9",
        sodium: "326",
        calcium: "2%",
        iron: "22%"
      },
      {
        name: "KitKat",
        calories: "518",
        fat: "26.0",
        carbs: "65",
        protein: "7.0",
        sodium: "54",
        calcium: "12%",
        iron: "6%"
      },
      {
        name: "Marshmallow",
        calories: "318",
        fat: "0.2",
        carbs: "81",
        protein: "1.8",
        sodium: "80",
        calcium: "0%",
        iron: "1%"
      }
    ]
  })
  .value();

export default function(page, perPage, sort, order, filter, callback) {
  const start = (page - 1) * perPage;
  const end = page * perPage;
  if (filter !== "") {
    const pattern = new RegExp(filter.toLowerCase());
    setTimeout(() => {
      const result = {
        count: fakeDB
          .get("data")
          .filter(data => {
            return pattern.test(data.name.toLowerCase());
          })
          .size()
          .value(),
        data: fakeDB
          .get("data")
          .filter(data => {
            return pattern.test(data.name.toLowerCase());
          })
          .orderBy([sort], [order])
          .slice(start, end)
          .value()
      };
      callback(result);
    }, 200);
  } else {
    setTimeout(() => {
      const result = {
        count: fakeDB.get("data").size().value(),
        data: fakeDB
          .get("data")
          .orderBy([sort], [order])
          .slice(start, end)
          .value()
      };
      callback(result);
    }, 200);
  }
}
