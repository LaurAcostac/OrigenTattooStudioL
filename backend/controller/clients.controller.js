const clientUseCases = require('../usecases/clients.usecase');

exports.showClientController = async (req, res) =>{
  try {
    const result = await clientUseCases.showClients();

    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.json({
        success: result.success,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.createClientController = async (req, res) =>{
  try {
    const imageDestination = `/assets/images/${req.file.originalname}`;
    req.body.fotoDocumento = imageDestination;
    const result = await clientUseCases.createClient(req.body);

    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.json({
        success: result.success,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateClientController = async (req, res) =>{
  try {
    const result = await clientUseCases.updateClient(req.body);

    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.json({
        success: result.success,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteClientController = async (req, res) => {
  try {
    const result = await clientUseCases.deleteClient(req.body);

    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.json({
        success: result.success,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.showProfileController = async (req, res) => {
  try {
    const client = await clientUseCases.showProfile('6561ff27dfed6c1bfc053913');
    return res.render('clientprofile', {
      client: client
    });
  } catch (error) {
    console.log(error)
  }
}