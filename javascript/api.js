
fetch('http://localhost:3000/table').then(res => res.json())
.then(json => {
    console.log(json[0].Nam)
    document.getElementById('NguoiTao').innerHTML = json[0].NguoiTao
    document.getElementById('NguoiXuLY').innerHTML = json[0].NguoiXuLY
    document.getElementById('TheoKeHoachThang').innerHTML = json[0].TheoKeHoachThang
    document.getElementById('SoTienDuTru').innerHTML = json[0].SoTienDuTru
    document.getElementById('TieuDe').innerHTML = json[0].TieuDe
    document.getElementById('PhongBanLienQuan').innerHTML = json[0].PhongBanLienQuan
    document.getElementById('ThoiGianXuLy').innerHTML = json[0].ThoiGianXuLy
    document.getElementById('PhoiHopView').innerHTML = json[0].PhoiHopView
    document.getElementById('BoPhan').innerHTML = json[0].BoPhan
    document.getElementById('TrangThai').innerHTML = json[0].TrangThai
    document.getElementById('Nam').innerHTML = json[0].Nam
    document.getElementById('ThoiGianBanGiao').innerHTML = json[0].ThoiGianBanGiao
    document.getElementById('NoiDungDeXuat').innerHTML = json[0].NoiDungDeXuat
    document.getElementById('NgayTao').innerHTML = json[0].NgayTao
    document.getElementById('NgayGui').innerHTML = json[0].NgayGui
    document.getElementById('Thuoc').innerHTML = json[0].Thuoc
    document.getElementById('NhaCungCap').innerHTML = json[0].NhaCungCap
    document.getElementById('YKienTroLy').innerHTML = json[0].YKienTroLy
    document.getElementById('MuaSap').innerHTML = json[0].MuaSap
    // document.getElementById('DanhSachPO').innerHTML = json[0].DanhSachPO
    // document.getElementById('FileDinhKem').innerHTML = json[0].FileDinhKem
})

// fetch('http://localhost:3000/Duyet').then(res => res.json())
// .then(res => {
//     for (var i = 0; i< res.length; i++)
//     {
//         document.getElementById('stt').innerHTML = res[i].stt
//         document.getElementById('NguoiThucHien').innerHTML = res[i].NguoiThucHien
//         document.getElementById('PheDuyet').innerHTML = res[i].PheDuyet
//         document.getElementById('NoiDung').innerHTML = res[i].NoiDung
//     }
// })

fetch('http://localhost:3000/Duyet').then(res => res.json())
.then(res => {
    document.getElementById('stt').innerHTML = res[0].stt
    document.getElementById('NguoiThucHien').innerHTML = res[0].NguoiThucHien
    document.getElementById('PheDuyet').innerHTML = res[0].PheDuyet
    document.getElementById('NoiDung').innerHTML = res[0].NoiDung
    document.getElementById('stt1').innerHTML = res[1].stt
    document.getElementById('NguoiThucHien1').innerHTML = res[1].NguoiThucHien
    document.getElementById('PheDuyet1').innerHTML = res[1].PheDuyet
    document.getElementById('NoiDung1').innerHTML = res[1].NoiDung
})