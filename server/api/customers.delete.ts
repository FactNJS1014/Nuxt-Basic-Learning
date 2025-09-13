export default defineEventHandler(async (event) => {
  const body = await readBody(event);
    // Here you would typically delete the customer from a database
    return { message: 'Customer deleted', customer: body.name };
})