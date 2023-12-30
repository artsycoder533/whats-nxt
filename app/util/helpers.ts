import { client } from "../lib/sanity";

// Function to update stockQuantity in Sanity
export async function updateStockInSanity(lineItem: FormattedLineItem) {
  try {
    // Fetch the current product from Sanity
    const currentProduct = await client.getDocument(lineItem.id);

    if (!currentProduct) return;

    // Calculate the new stockQuantity
    const newStockQuantity = currentProduct.stockQuantity - lineItem.quantity;

    // Update the product in Sanity with the new stockQuantity
    await client
      .patch(lineItem.id)
      .set({ stockQuantity: newStockQuantity })
      .commit();

    //return something here to trigger remove cart!
    console.log(`Stock updated for product ${lineItem.id}`);
  } catch (error) {
    console.error(`Error updating stock for product ${lineItem.id}:`, error);
  }
}
