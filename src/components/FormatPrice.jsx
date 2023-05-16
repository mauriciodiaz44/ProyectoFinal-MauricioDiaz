const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 2,
  }).format(price);
};

export default FormatPrice;
