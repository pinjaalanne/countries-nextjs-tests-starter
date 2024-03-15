import countries from "../services/countries";

test('getAll returns data from the API', async () => {
    // Call the getAll function from the countries service
    const data = await countries.getAll();

    // Check that the data is an array
    expect(Array.isArray(data)).toBe(true);

    // Check that the data contains the expected properties
    data.forEach(country => {
        expect(country).toHaveProperty('name');
        expect(country).toHaveProperty('population');
        expect(country).toHaveProperty('area');
    });
});