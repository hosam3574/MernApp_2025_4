const Category =require('../models/category');


//create category

const createCategory = async (req,res)=>{
    const { name, price, description, category, imageUrl } = req.body;
    try {
        const category = new Product({
            name,
            description,
            imageUrl
        })
        await category.save();
        res.status(201).json({ message: 'Category created successfully', category });
    }
    catch (error) {
        console.error('Error creating Category:', error.message);
        res.status(500).json({ message: error.message });
    }
}




//  get all categoryies
const getAllCategoryies = async (req,res)=>{
    try {
        const categoryies = await Category.find();
        res.status(200).json(categoryies);
    } catch (error) {
        console.error('Error fetching categoryies:', error.message);
        res.status(500).json({ message: error.message });
    }
}





//  get product by id
const getCategoryById = async (req,res)=>{
    const id = req.params.id;
    try {
        const category = await category.findById(id);
        if (!category) {
            return res.status(404).json({ message: 'category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        console.error('Error fetching category:', error.message);
        res.status(500).json({ message: error.message });
    }
}

//  update product by id
const updateCategoryById = async (req,res)=>{
    const id = req.params.id;
    const { name,  description,  imageUrl } = req.body;
    try {
        const category = await category.findByIdAndUpdate(id, {
            name,
            description,
            imageUrl
        }, { new: true });
        if (!category) {
            return res.status(404).json({ message: 'category not found' });
        }
        res.status(200).json({ message: 'category updated successfully', category });
    }
    catch (error) { 
        console.error('Error updating category:', error.message);
        res.status(500).json({ message: error.message });
    }
}

//  delete Category by id
const deleteCategoryById = async (req,res)=>{
    const id = req.params.id;
    try {
        const category = await category.findByIdAndDelete(id);
        if (!category) {
            return res.status(404).json({ message: 'category not found' });
        }
        res.status(200).json({ message: 'category deleted successfully' });
    } catch (error) {
        console.error('Error deleting category:', error.message);
        res.status(500).json({ message: error.message });
    }
}



module.exports = { createCategory,getAllCategoryies,getCategoryById,updateCategoryById,deleteCategoryById};