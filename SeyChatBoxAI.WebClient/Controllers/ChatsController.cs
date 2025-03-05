using Microsoft.AspNetCore.Mvc;

namespace SeyChatBoxAI.WebClient.Controllers
{
    [Route("/chats")]
    public class ChatsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
