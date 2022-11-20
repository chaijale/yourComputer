// CONSTRUCTOR DE PRODUCTOS
class Productos {
    constructor(img,id,precio,descripcion, categoria) {

        this.img = img
        this.id = id
        this.precio = precio
        this.descripcion = descripcion
        this.categoria = categoria

    }
}

// CREANDO NUEVOS PRODCUTOS
const auri1 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667679024/proyectoJAVASCRIPT/AURICULARES/1_wzksrq.jpg','001','23100','Auriculares HyperX Cloud Flight Black Wireless.','auriculares');
const auri2 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667679161/proyectoJAVASCRIPT/AURICULARES/1_bdaske.jpg','002','19600','Auriculares HyperX Cloud Revolver 7.1.','auriculares');
const auri3 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667679235/proyectoJAVASCRIPT/AURICULARES/1_ckfqef.jpg','003','20300','Auriculares HP HyperX Cloud II Red PC | PS4.','auriculares');
const auri4 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667679285/proyectoJAVASCRIPT/AURICULARES/1_t6tu7v.jpg','004','33100','Auriculares Logitech G935 LightSync Inalambrico 7.1.','auriculares');
const auri5 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667679337/proyectoJAVASCRIPT/AURICULARES/1_cui1je.jpg','005','47250','Auriculares Inalambrico Logitech Astro A50.','auriculares');
const auri6 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667679387/proyectoJAVASCRIPT/AURICULARES/1_xmkw8h.jpg','006','31500','Auriculares Inalambricos Logitech G733.','auriculares');
const auri7 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667679471/proyectoJAVASCRIPT/AURICULARES/1_tycrcg.jpg','007','30550','Auriculares Inalambricos Logitech G733.','auriculares');
const auri8 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667679515/proyectoJAVASCRIPT/AURICULARES/1_sjjpeq.jpg','008','30200','Auriculares Inalambricos Logitech G733.','auriculares');
const peri1 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667677447/proyectoJAVASCRIPT/TECLADOYMOUSE/1_hni4gh.jpg','009','18000','Mouse logitech G903.','perifericos');
const peri3 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667677714/proyectoJAVASCRIPT/TECLADOYMOUSE/1_mghxnt.jpg','010','24200','Mouse Logitech Mx Master 3.','perifericos');
const peri2 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667677615/proyectoJAVASCRIPT/TECLADOYMOUSE/1_qdlatz.jpg','011','16500','Mouse Logitech Mx Ergo Trackball Inalámbrico.','perifericos');
const peri4 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667677775/proyectoJAVASCRIPT/TECLADOYMOUSE/1_ddgne2.jpg','012','13600','Mouse Inalámbrico Gamer Logitech G604 Lightspeed.','perifericos');
const peri5 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667677834/proyectoJAVASCRIPT/TECLADOYMOUSE/1_qe0s0f.jpg','013','43500','Teclado Gamer Logitech G915 TKL Rgb Negro.','perifericos');
const peri6 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667677894/proyectoJAVASCRIPT/TECLADOYMOUSE/1_lvpeox.jpg','014','43000','Teclado Gamer Logitech G915 TKL Rgb Blanco.','perifericos');
const peri7 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667677944/proyectoJAVASCRIPT/TECLADOYMOUSE/1_qr9aqj.jpg','015','41900','Teclado Gamer Logitech G915 Rgb Negro.','perifericos');
const peri8 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667677996/proyectoJAVASCRIPT/TECLADOYMOUSE/1_zfpxhf.jpg','016','34500','Teclado Gamer Corsair K70 TKL Champion Rgb.','perifericos');
const peri9 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667678054/proyectoJAVASCRIPT/TECLADOYMOUSE/1_knlxaj.jpg','017','26600','Teclado Gamer HyperX Alloy Elite 2 Rgb.','perifericos');
const moni1 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667676243/proyectoJAVASCRIPT/MONITORES/curve49_tft5m1.png','018','380000','Monitor Gamer ASUS ROG STRIX 49 HDR XG49V QUltrawide 144Hz','monitores');
const moni2 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667675765/proyectoJAVASCRIPT/MONITORES/2_u36smk.jpg','019','80000','Monitor Gamer Gigabyte 24 Edge FHD 165Hz 1ms.','monitores');
const moni3 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667676406/proyectoJAVASCRIPT/MONITORES/2_nxkqpk.jpg','020','200000','Monitor LG Curvo UltraWide Curvo 34 34WL85C-B QHD IPS 21 9','monitores');
const moni4 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667676624/proyectoJAVASCRIPT/MONITORES/2_u6yewu.png','021','130000','Monitor Gamer LG 34 UltraGear 34GL750 Ultra Wide Curvo 144Hz 1ms.','monitores');
const moni5 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667676766/proyectoJAVASCRIPT/MONITORES/2_lcpuvp.jpg','022','90000','Monitor Gamer Viewsonic 24 VX2468-PC-MHD Curvo 165hz','monitores');
const cpu1 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667672976/proyectoJAVASCRIPT/CPU/2frgamingjpg_kggpo3.jpg','023','180000','Cpu AMD Ryzen 9 5950X, Grafica NVIDIA GeForce RTX 3080.','cpu');
const cpu2 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667672976/proyectoJAVASCRIPT/CPU/amdryzen9_ph6zww.jpg','024','200000','Cpu Intel® Core™ i7-10700K, Grafica NVIDIA GeForce RTX 3090.','cpu');
const cpu3 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667672976/proyectoJAVASCRIPT/CPU/customgaming_u7zc8h.jpg','025','150000','Cpu AMD RYZEN 3 4350G, Grafica NVIDIA GeForce 1650ti.','cpu');
const cpu4 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667672976/proyectoJAVASCRIPT/CPU/pcgamercorei5_tw8ahq.jpg','026','130000','Cpu Intel® Core™ i5-9500K Grafica NVIDIA GTX1050.','cpu');
const cpu5 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667672976/proyectoJAVASCRIPT/CPU/titangaming_jyrhbs.jpg','027','190000','Cpu Intel I7 8700k Grafica NVIDIA GeForce 1650ti.','cpu');
const note1 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667678381/proyectoJAVASCRIPT/NOTEBOOK/1_zsdtrn.jpg','028','473700','Notebook Gamer AORUS KD 15.6" Core I7 11800H 16GB (2x8GB) 512GB SSD NVMe RTX 3060 240Hz W11.','notebook');
const note2 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667678495/proyectoJAVASCRIPT/NOTEBOOK/1_vkdrj4.jpg','029','483600','Notebook ASUS ROG ZEPHYRUS 14" WQHD RYZEN 9 4900HS 16GB 1TB SSD NVMe RTX 2060 240 Hz W11.','notebook');
const note3 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667678637/proyectoJAVASCRIPT/NOTEBOOK/1_byg7ck.jpg','030','232950','Notebook XPG XENIA 14" Core I5 1135G7 16GB 512GB SSD NVMe Gti1650ti 144 Hz W10 home','notebook');
const note4 = new Productos('https://res.cloudinary.com/dgl4y8ct8/image/upload/v1667678772/proyectoJAVASCRIPT/NOTEBOOK/1_zlrdaf.jpg','031','497100','Notebook Gamer XPG XENIA 15.6" Core I7 11800H 32GB (2x16GB) 1TB SSD NVMe RTX 3070 165Hz W10.','notebook');


