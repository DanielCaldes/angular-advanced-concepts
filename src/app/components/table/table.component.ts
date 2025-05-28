import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { ProductSale } from '../../models/productSale.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  salesList : ProductSale[];
  showAlternateColumns : Boolean;
  constructor(){
    this.salesList = [
  {
    productId: 1001,
    productName: "Laptop ZX-500",
    category: "Computadoras",
    priceUSD: 899.99,
    unitsSold: 12,
    saleDate: "2025-05-01",
    stock: 25,
    supplier: "TechSupplier Inc."
  },
  {
    productId: 1002,
    productName: "Smartphone Neo 8",
    category: "Teléfonos",
    priceUSD: 699.00,
    unitsSold: 20,
    saleDate: "2025-05-02",
    stock: 40,
    supplier: "MobileWorld"
  },
  {
    productId: 1003,
    productName: "Monitor 27” UltraHD",
    category: "Periféricos",
    priceUSD: 299.50,
    unitsSold: 8,
    saleDate: "2025-05-03",
    stock: 15,
    supplier: "DisplayTech"
  },
  {
    productId: 1004,
    productName: "Teclado Mecánico X1",
    category: "Accesorios",
    priceUSD: 89.99,
    unitsSold: 15,
    saleDate: "2025-05-04",
    stock: 30,
    supplier: "KeyWorks Ltd."
  },
  {
    productId: 1005,
    productName: "Mouse Inalámbrico V5",
    category: "Accesorios",
    priceUSD: 45.00,
    unitsSold: 18,
    saleDate: "2025-05-04",
    stock: 45,
    supplier: "KeyWorks Ltd."
  },
  {
    productId: 1006,
    productName: "Tablet ProTab 11",
    category: "Tablets",
    priceUSD: 429.99,
    unitsSold: 10,
    saleDate: "2025-05-05",
    stock: 12,
    supplier: "TechSupplier Inc."
  },
  {
    productId: 1007,
    productName: "Auriculares NoiseCancel 300",
    category: "Accesorios",
    priceUSD: 120.00,
    unitsSold: 9,
    saleDate: "2025-05-05",
    stock: 20,
    supplier: "SoundPro"
  },
  {
    productId: 1008,
    productName: "Router Wi-Fi 6 AX3600",
    category: "Redes",
    priceUSD: 159.95,
    unitsSold: 7,
    saleDate: "2025-05-06",
    stock: 14,
    supplier: "NetConnect"
  },
  {
    productId: 1009,
    productName: "SSD Externo 1TB UltraSpeed",
    category: "Almacenamiento",
    priceUSD: 135.00,
    unitsSold: 11,
    saleDate: "2025-05-07",
    stock: 25,
    supplier: "StorageKing"
  },
  {
    productId: 1010,
    productName: "Impresora EcoSmart 3000",
    category: "Impresoras",
    priceUSD: 220.00,
    unitsSold: 6,
    saleDate: "2025-05-07",
    stock: 8,
    supplier: "PrintTech"
  },
  {
    productId: 1011,
    productName: "Webcam FullHD 60fps",
    category: "Periféricos",
    priceUSD: 75.00,
    unitsSold: 14,
    saleDate: "2025-05-08",
    stock: 35,
    supplier: "VisionPro"
  },
  {
    productId: 1012,
    productName: "Base Enfriadora Laptop X3",
    category: "Accesorios",
    priceUSD: 49.99,
    unitsSold: 17,
    saleDate: "2025-05-08",
    stock: 22,
    supplier: "CoolTech"
  },
  {
    productId: 1013,
    productName: "Proyector LED MiniBeam 200",
    category: "Proyectores",
    priceUSD: 310.00,
    unitsSold: 5,
    saleDate: "2025-05-09",
    stock: 6,
    supplier: "VisionPro"
  },
  {
    productId: 1014,
    productName: "Smartwatch FitPlus S2",
    category: "Wearables",
    priceUSD: 199.00,
    unitsSold: 13,
    saleDate: "2025-05-09",
    stock: 18,
    supplier: "WearTech"
  },
  {
    productId: 1015,
    productName: "Cámara de Seguridad HD360",
    category: "Seguridad",
    priceUSD: 180.00,
    unitsSold: 16,
    saleDate: "2025-05-10",
    stock: 10,
    supplier: "SecureVision"
  }
   ];

    this.showAlternateColumns = false;
  }

  toggleTable(){
    this.showAlternateColumns = !this.showAlternateColumns;
  }
}
