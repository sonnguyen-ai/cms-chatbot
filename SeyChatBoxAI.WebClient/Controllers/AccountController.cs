using Microsoft.AspNetCore.Mvc;

namespace SeyChatBoxAI.WebClient.Controllers
{
    public class AccountController : Controller
    {
        [Route("login")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
