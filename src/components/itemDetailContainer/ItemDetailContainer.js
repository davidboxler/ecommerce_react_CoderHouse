import React from "react";
import ItemDetails from "../itemDetails/ItemDetails";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import database from '../../services/firebase';

function ItemDetailContainer() {
  const { id } = useParams();
  const [details, setProduct] = useState({});

  const getProduct = async () => {
    const docRef = doc(database, "productos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let product = docSnap.data();
      product.id = docSnap.id;
      setProduct(product);
    } else {
      alert("Ha ocurrido un error inesperado")
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return <ItemDetails data={details} />;
}

export default ItemDetailContainer;
