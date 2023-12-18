"use client"

import { Product, ProductElement } from "@/features/models"
import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { InputText } from "primereact/inputtext"
import { ChangeEvent, useEffect, useState } from "react"

export function CustomDataTable() {
  const [products, setProducts] = useState<ProductElement[]>([])
  const [searchQuery, setSearchQuery] = useState<string>("")

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((json: Product) => setProducts(json?.products))
      .catch((error) => console.error("Error loading products:", error))
  }, [searchQuery])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSearch = () => {
    fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
      .then((res) => res.json())
      .then((json: Product) => setProducts(json?.products))
      .catch((error) => console.error("Error searching products:", error))
  }

  return (
    <div className="shadow-xl p-8 rounded-lg bg-white">
      <div className="mb-4 gap-2 flex">
        <InputText
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleInputChange}
          className="border text-black rounded-lg p-3"
        />
        <Button
          icon="pi pi-search"
          className=" bg-teal-500 text-white rounded-lg p-3"
          onClick={handleSearch}
        />
        <Button
          icon="pi pi-refresh"
          className="bg-amber-500 border-none text-white rounded-lg p-3"
          onClick={() => setSearchQuery("")}
        />
      </div>

      <DataTable
        value={products}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="title" header="Title" style={{ width: "25%" }}></Column>
        <Column field="price" header="Price" style={{ width: "25%" }}></Column>
        <Column
          field="category"
          header="Category"
          style={{ width: "25%" }}
        ></Column>
      </DataTable>
    </div>
  )
}
