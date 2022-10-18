import { model, models, Schema } from 'mongoose';

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String },
    price: { type: Number },
    description: { type: String, maxLength: 260 },
    stock: { type: Number, min: 0, default: 0 },
    ctg: { type: String },
    tags: { type: [String] },
    sold: { type: Number, default: 0 },
    pics: { type: [String] },
    thumb: { type: String },
    assetPath: { type: String },
  },
  { timeStamps: true }
);

const Product = models.Product || model('Product', ProductSchema);

export default Product;
