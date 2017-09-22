const createInBoxRow = (inBox1, inBox2) => {
  const inBoxRow = ['What\'s in the box', '', ''];
  for (let item of inBox1) {
    inBoxRow[1] += item + ' ,';
  };

  for (let item of inBox2) {
    inBoxRow[2] += item + ' ,';
  };
  // inBox1[1].slice(-2);
  // inBox1[2].slice(-2);
  return inBoxRow;
};

const createFeatureRows = (f1, f2) => {
  const featureRows = [];
  const f2FeaturesAdded = [];
  for (let feature in f1) {
    let f2Feature = '---';
    if (f2[feature]) {
      f2Feature = f2[feature];
      f2FeaturesAdded.push(feature);
    }
    // console.log('pusing to feature Rows: ', [feature, f1[feature], f2Feature]);
    featureRows.push([feature, f1[feature], f2Feature]);
  };

  for (let feature in f2) {
    if (!f2FeaturesAdded.includes(feature)) {
      featureRows.push([feature, '---', f2[feature]]);
    };
  };
  return featureRows;
}

export default (productData1, productData2) => {
  console.log(productData2.product, productData1.product);
  let tableRows = [];
  let productRows = [];
  let featureRows;
  productRows.push(['product', productData1.product, productData2.product]);
  productRows.push(['price', productData1.price, productData2.price]);
  productRows.push(['productDescription', productData1.productDescription, productData2.productDescription]);
  productRows.push(createInBoxRow(productData1.inBox, productData2.inBox));
  featureRows = createFeatureRows(productData1.generalFeatures, productData2.generalFeatures);
  tableRows = productRows.concat(featureRows);
  // console.log('featureRows: ', featureRows);
  // console.log('return tableRows: ', tableRows);
  return tableRows;
};
