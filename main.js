function facture(nbr) {
  if (nbr > 150) {
    return nbr * (1 - 0.01);
  } else {
    return nbr;
  }
}

console.log(facture(149));
console.log(facture(150));
console.log(facture(151));
