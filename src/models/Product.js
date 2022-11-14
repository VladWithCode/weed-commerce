import { model, models, Schema } from 'mongoose';

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true },
    price: { type: Number },
    unit: { type: String, enum: ['gr', 'kg', 'oz'] },
    description: { type: String },

    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    pics: { type: [String] },
    thumb: { type: String, default: '/img/placeholder.jpg' },
    assetPath: { type: String },
    absolutePath: { type: String },

    stock: { type: Number, min: 0, default: 0 },
    sold: { type: Number, default: 0, select: false },
    buyPrice: { type: Number, default: 0, select: false },
    earnings: { type: Number, default: 0, select: false },
  },
  { timeStamps: true }
);

const Product = models.Product || model('Product', ProductSchema);

export default Product;
