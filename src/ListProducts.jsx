

const ListProducts = () => {
    const productsFromApi = [
      {
        id: 1,
        title: "Produit 1",
        description: "Description du produit 1",
        price: 10,
      },
      {
        id: 2,
        title: "Produit 2",
        description: "Description du produit 2",
        price: 20,
      },
      {
        id: 3,
        title: "Produit 3",
        description: "Description du produit 3",
        price: 30,
      },
    ];





    // 1. Créer un composant ListProducts qui affiche la liste des produits récupérés depuis l'API.
    const handleDelete = (product) => {
        console.log("je veux supprimer le produit ", product);
        
        console.log("je veux supprimer le produit ", product.title, product.id);
    }

    // 1. Récupérer la liste des produits depuis l'API.
              // 2. Afficher les produits dans une liste.


              // 3. Ajouter un bouton "Supprimer" pour chaque produit.
              // 4. Au clic sur le bouton "Supprimer", supprimer le produit de la liste.
              // 5. Afficher la liste des produits dans le composant App.

    return (
        <div>
            <h1>Liste des produits</h1>
            <ul>

                {productsFromApi.map((product) => (

                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>{product.price} €</p>
                        <button onClick={() => handleDelete(product)}>
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default ListProducts;