using Microsoft.AspNetCore.Mvc;

namespace SeyChatBoxAI.WebClient.Controllers
{
    [Route("/build-ai-chatbot")]
    public class BuildAIChatBotController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
