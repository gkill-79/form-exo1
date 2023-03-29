

const CreateProduct = () => {
    const handleSubmit = (e) => {
        e.preventDefault()


        const title = e.target.title.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
    
        console.log(title, description, price);

    }

    return (
        <div>
            <h1>"Créer un produit"</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Titre</label>
                        <input type="text" name="title" id="title" />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" id="description" />
                    </div>
                    <div>
                        <label htmlFor="price">Prix</label>
                        <input type="number" name="price" id="price" />
                    </div>
                    <input type="submit" />
                </form>
            </section>
        </div>
    )
}

export default CreateProduct;