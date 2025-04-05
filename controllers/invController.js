const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

invCont.buildByInventoryId = async function (req, res, next) {
  const inv_id = req.params.inv_id
  const data = await invModel.getInventoryByInvId(inv_id)
  const grid = await utilities.buildInventoryPage(data)
  let nav = await utilities.getNav()
  console.log(data)
  //const year = data[0].inv_year
  //const make = data[0].inv_make
  //const model = data[0].inv_model
  res.render("./inventory/inventory", {
    title: "Test",
    nav,
    grid,
  })
}

module.exports = invCont
