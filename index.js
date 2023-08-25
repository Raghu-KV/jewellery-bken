import express from "express";
import mysql from "mysql2";
import cors from "cors";
import * as dotenv from "dotenv";

const app = express();
dotenv.config();

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
db.connect();

app.get("/", (req, res) => {
  res.send("express working successfully");
});

app.get("/products", (req, res) => {
  const query = "SELECT * FROM product";
  db.query(query, (err, data) => {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    return res.send(data);
  });
});

app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM product WHERE id = ?";

  db.query(query, id, (err, data) => {
    if (err) return res.send(err);
    return res.send(data);
  });
});

app.post("/addProduct", (req, res) => {
  const query =
    "INSERT INTO product (`jewellery`,`desc`, `imageUrl`, `category`,`price`,`quantity`) VALUES (?)";
  const values = [
    req.body.jewellery,
    req.body.desc,
    req.body.imageUrl,
    req.body.category,
    req.body.price,
    req.body.quantity,
  ];

  db.query(query, [values], (err, msg) => {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    return res.send({ message: "Added Product", db_message: msg });
  });
});

app.put("/editProduct/:id", (req, res) => {
  const id = +req.params.id;
  const query =
    "UPDATE product SET `jewellery` = ?,`desc` = ?, `imageUrl` = ?,`category` = ?, `price` = ?, `quantity` = ?  WHERE `id` = ?";
  const values = [
    req.body.jewellery,
    req.body.desc,
    req.body.imageUrl,
    req.body.category,
    +req.body.price,
    +req.body.quantity,
  ];

  db.query(query, [...values, id], (err, msg) => {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    return res.send({ message: "Edited  Product", db_message: msg });
  });
});

app.delete("/deleteProduct/:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM product WHERE id = ?";

  db.query(query, id, (err, msg) => {
    if (err) return res.send(err);
    return res.send(msg);
  });
});

//USER ADD (CREATE) TO CART -------------------------
app.post("/addToCart/:id", (req, res) => {
  const query =
    "INSERT INTO cart (`jewellery`, `desc`,`imageUrl`,`price`,`quantity`,`product_id`) VALUES(?)";
  const product_id = req.params.id;
  const values = [
    req.body.jewellery,
    req.body.desc,
    req.body.imageUrl,
    req.body.price,
    req.body.quantity,
    +product_id,
  ];

  db.query(query, [values], (err, msg) => {
    if (err) return res.send(err);
    return res.send(msg);
  });
});

//USER READ CART------------------------
app.get("/cartItems", (req, res) => {
  const query = "SELECT * FROM CART";

  db.query(query, (err, data) => {
    if (err) return res.send(err);
    return res.send(data);
  });
});

//USER DELETR CART----------------
app.delete("/deleteCartItem/:id", (req, res) => {
  const id = +req.params.id;
  const query = "DELETE FROM cart WHERE id = ?";

  db.query(query, id, (err, msg) => {
    if (err) return res.send(err);
    return res.send(msg);
  });
});
//-----------------------------

//USER UPDATE CART-----------------
app.post("/updateCartItem/:id", (req, res) => {
  const id = +req.params.id;
  const query = "UPDATE cart SET `quantity` = ? WHERE `id` = ?";

  const values = [+req.body.quantity];

  db.query(query, [...values, id], (err, msg) => {
    if (err) return res.send(err);
    return res.send(msg);
  });
});
//--------------------------------

//PLACE ORDER----------------
//delete every thing from cart table
app.delete("/deleteAllCartItem/", (req, res) => {
  const query = "TRUNCATE TABLE cart";

  db.query(query, (err, msg) => {
    if (err) return res.send(err);
    return res.send(msg);
  });
});

app.post("/placeOrder", (req, res) => {
  const orders = req.body;
  console.log(orders);
  const query =
    "INSERT INTO orders (`jewellery`, `imageUrl`,`price`,`quantity`,`productItem_id`) VALUES ?";
  const values1 = [];
  for (let i = 0; i < orders.length; i++) {
    const instance = [];
    instance.push(orders[i].jewellery);
    instance.push(orders[i].imageUrl);
    instance.push(orders[i].price);
    instance.push(orders[i].quantity);
    instance.push(orders[i].product_id);

    values1.push(instance);
  }
  // const values2 = [];
  // for (let i = 0; i < orders.length; i++) {
  //   const instance = [];
  //   instance.push(orders[i].quantity);
  //   instance.push(orders[i].product_id);

  //   values2.push(instance);
  // }
  // console.log("values are", values1, values2);
  db.query(query, [values1], (err, msg) => {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    return res.send({ message: "Added Product", db_message: msg });
  });
});

app.get("/getOrder", (req, res) => {
  const query = "SELECT * FROM orders";
  db.query(query, (err, data) => {
    if (err) return res.send(err);
    return res.send(data);
  });
});
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
//testsad
