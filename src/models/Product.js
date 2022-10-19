import { model, models, Schema } from 'mongoose';

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String },
    price: { type: Number },
    unit: { type: String, enum: ['gr', 'kg', 'oz'] },
    description: { type: String },

    ctgs: { type: [String] },
    pics: { type: [String] },
    thumb: { type: String, default: '/img/placeholder.jpg' },
    assetPath: { type: String },

    stock: { type: Number, min: 0, default: 0 },
    sold: { type: Number, default: 0 },
    earnings: { type: Number, default: 0 },
  },
  { timeStamps: true }
);

const Product = models.Product || model('Product', ProductSchema);

export default Product;
