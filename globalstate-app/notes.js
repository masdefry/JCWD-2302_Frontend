// Step1. Buat Action
// Step2. Buat Reducer
// Step3. Buat index.js didalam folder Reducer untuk nge-combine seluruh Reducer
// Step4. Import allReducer (index.js) kedalam App.js. Lalu simpan ke store

// Untuk mengirim data ke global store :
// 1. import Action
// 2. const mapDispatchToProps = { updateDataCarts }
// 3. export default connect('', mapDispatchToProps)(DetailProduct)
// 4. Untuk mengirim datanya : this.props.nama_action(data yg dikirim)

// Untuk menerima data dari global store:
// 1. const mapStateToProps = (state) => {
//     return{
//         totalCarts: state.totalCarts
//       }
//   }
// 2. export default connect(mapStateToProps, '')(DetailProduct)
// 3. Ambil datanya : this.props.nama_state.nama_property