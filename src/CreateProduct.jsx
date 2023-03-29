
// 1. Créer un composant CreateProduct qui affiche un formulaire avec les champs suivants : titre, description, prix. Le formulaire doit être soumis en POST vers l'API de création de produit.
const CreateProduct = () => {
    // 2. Afficher les valeurs saisies dans le formulaire dans la console.
    const handleSubmit = (e) => {
        // 3. Empêcher le comportement par défaut du formulaire (rafraîchissement de la page).
        e.preventDefault()

        // 4. Récupérer les valeurs saisies dans le formulaire.
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