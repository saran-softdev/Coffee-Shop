const router = require("express").Router();
const productDataModel = require("../model/product.modal");

/* User Manipulation */

router.get("/product-get", async (req, res) => {
  const data = await productDataModel.find();
  res.send(data);
});

router.post("/product-post", async (req, res) => {
  const { productName, productImage, productPrice } = req.body;
  console.log(req.body);
  const product_data = new productDataModel({
    productName,
    productImage,
    productPrice
  });

  await product_data.save();
  res.send("Data posted: ");
});

router.put("/product-update/:id", async (req, res) => {
  const id = req.params.id;
  const { productName, productImage, productPrice } = req.body;
  productDataModel
    .findByIdAndUpdate(id, {
      productName,
      productImage,
      productPrice
    })
    .then(() => {
      res.send("Data Updated");
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/product-delete/:id", async (req, res) => {
  const id = req.params.id;
  productDataModel
    .findByIdAndRemove(id)
    .then(() => {
      res.send("Data Deleted");
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
