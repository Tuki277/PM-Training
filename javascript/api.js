function saveForm (){
    var NguoiTao = document.getElementById('NguoiTao').value
    var NguoiXuLy = document.getElementById('NguoiXuLY').value
    var TheoKeHoachThang = document.getElementById('TheoKeHoachThang').value
    var SoTienDuTru = document.getElementById('SoTienDuTru').value
    var TieuDe = document.getElementById('TieuDe').value
    var PhongBanLienQuan = document.getElementById('PhongBanLienQuan').value
    var ThoiGianXuLy = document.getElementById('ThoiGianXuLy').value
    var ThoiGianXuLy = document.getElementById('PhoiHopView').value
    var BoPhan = document.getElementById('BoPhan').value
    var TrangThai = document.getElementById('TrangThai').value
    var Nam = document.getElementById('Nam').value
    var ThoiGianBanGiao = document.getElementById('ThoiGianBanGiao').value
    var NoiDungDeXuat = document.getElementById('NoiDungDeXuat').value
    var NgayTao = document.getElementById('NgayTao').value
    var NgayGui = document.getElementById('NgayGui').value
    var Thuoc = document.getElementById('Thuoc').value
    var NhaCungCap = document.getElementById('NhaCungCap').value
    var YKienTroLy = document.getElementById('YKienTroLy').value
    var MuaSap = document.getElementById('MuaSap').value
    var DanhSachPO = document.getElementById('DanhSachPO').value
    // var FileDinhKem = document.getElementById('FileDinhKem').value
    var a = []

    console.log('a trc push ==== ', a)

    var dataAdd = {
        NguoiTao : NguoiTao,
        NguoiXuLy : NguoiXuLy,
        TheoKeHoachThang : TheoKeHoachThang,
        SoTienDuTru : SoTienDuTru,
        TieuDe : TieuDe,
        PhongBanLienQuan : PhongBanLienQuan,
        ThoiGianXuLy : ThoiGianXuLy,
        ThoiGianXuLy : ThoiGianXuLy,
        BoPhan : BoPhan,
        TrangThai : TrangThai,
        Nam : Nam,
        ThoiGianBanGiao : ThoiGianBanGiao,
        NoiDungDeXuat : NoiDungDeXuat,
        NgayTao : NgayTao,
        NgayGui : NgayGui,
        Thuoc : Thuoc,
        NhaCungCap : NhaCungCap,
        YKienTroLy : YKienTroLy,
        MuaSap : MuaSap,
        DanhSachPO : DanhSachPO
    }

    if (localStorage.getItem('data') === null) {
        localStorage.setItem('data', '[]')
    }

    var arrData = JSON.parse(localStorage.getItem('data'))
    arrData.push(dataAdd)

    localStorage.setItem('data', JSON.stringify(arrData))

    // console.log(JSON.parse(localStorage.getItem('data'))[0])

}



for (var i = 0; i <= localStorage.length; i++) {
    // console.log(JSON.parse(localStorage.getItem('data'))[i])
    document.getElementById('dong1').innerHTML = JSON.parse(localStorage.getItem('data'))[i].DanhSachPO
    document.getElementById('dong2').innerHTML = JSON.parse(localStorage.getItem('data'))[i].TieuDe
    document.getElementById('dong3').innerHTML = JSON.parse(localStorage.getItem('data'))[i].BoPhan
    document.getElementById('dong4').innerHTML = JSON.parse(localStorage.getItem('data'))[i].Nam
    document.getElementById('dong5').innerHTML = JSON.parse(localStorage.getItem('data'))[i].MuaSap
    document.getElementById('dong6').innerHTML = JSON.parse(localStorage.getItem('data'))[i].YKienTroLy
    document.getElementById('dong7').innerHTML = JSON.parse(localStorage.getItem('data'))[i].NgayGui
    document.getElementById('dong8').innerHTML = JSON.parse(localStorage.getItem('data'))[i].NguoiXuLy
    document.getElementById('dong9').innerHTML = JSON.parse(localStorage.getItem('data'))[i].TrangThai
}
