const userSchema = {
  id: '/userSchema',
  type: 'object',
  properties: {
    voornaam: { type: 'string', maxLength: 40 },
    tussenvoegsel: { type: 'string', maxLength: 10 },
    achternaam: { type: 'string', maxLength: 90 },
    telefoonnummer: { type: 'string', maxLength: 20 },
    wachtwoord: { type: 'string', maxLength: 255 },
    typeaccount: { type: 'int', maxLength: 11 },
    email: { type: 'string', format: 'email' },
  },
  required: ['voornaam', 'achternaam', 'telefoonnummer', 'wachtwoord', 'typeaccount', 'email']
};

module.exports = {
  userSchema,
};
