import { readFileSync } from "fs";
import { Category } from "./model/categoryModel.js";


 const importDataToMongoDB = async () => {
  try {
    const data = JSON.parse(readFileSync("./jsondata.json", "utf-8"));
    console.log(data);

    await Product.create(data);
    console.log("Data successfully imported.");
    // to exit the process
    process.exit();
  } catch (error) {
    console.log("error", error);
  }
};
export default importDataToMongoDB;

