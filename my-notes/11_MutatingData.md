<span>In this chapter...</span>

<span>Here are the topics we’ll cover</span>
What React Server Actions are and how to use them to mutate data.

<br>
How to work with forms and Server Components.

<br>
Best practices for working with the native `FormData` object, including type validation.

<br>
How to revalidate the client cache using the `revalidatePath` API.

How to create dynamic route segments with specific IDs.

<br>
<br>
## Creating an invoice

<span>Here are the steps you'll take to create a new invoice:</span>
<br>
1. Create a form to capture the user's input.
2. Create a Server Action and invoke it from the form.
3. Inside your Server Action, extract the data from the `formData` object.
4. Validate and prepare the data to be inserted into your database.
5. Insert the data and handle any errors.
6. Revalidate the cache and redirect the user back to invoices page.