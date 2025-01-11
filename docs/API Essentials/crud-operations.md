---
sidebar_position: 2
---
# CRUD Operations
_1 min read_

In the previous example of movie ticket counter, the interface was used to exchange money for tickets. In the tech world, this is classified as **CREATE** operation. The buyer created the order of buying the ticket by sending money.

APIs are designed to perform 4 fundamental operations
1. **Create** : Ex. Add a new delivery address on Zomato
2. **Read** : Ex. Get list of past orders in Amazon
3. **Update** : Ex. Update your KYC details on Zerodha
4. **Delete** : Ex. Delete your account from facebook 

:::info What is Soft delete?
In industry practice, records are typically not immediately deleted when a user initiates a delete operation. Instead, the record is marked with a "deleted" label, indicating that it has been deleted by the user. While the record is no longer visible to the user, it remains stored in the database.

This approach is similar to the "Recycle Bin" on your laptop or desktop, where files are moved after being deleted rather than permanently removed.

Records are retained for compliance or regulatory reasons, serving as evidence in case of future disputes or for features like account restoration.
:::