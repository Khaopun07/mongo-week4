createProduct = async (req, res) => { 
    const { product_name, product_type, price, unit } = req.body;
    const product = new Product({ product_name, product_type, price, unit }); 
 try { 
    const newProduct = await product.save(); 
    res.status(201).json(newProduct); } 
 catch (err) { 
     res.status(400).json({ message: err.message }); 
    } 
 
 };