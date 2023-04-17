import { VideoWithItsMaterials } from "@/protocols";

function checkUserAnswers(videos: VideoWithItsMaterials, userId: number) {
    videos.forEach((video) =>
        video.questions.forEach((question) => {
            if (question.users.some((user) => user.userId === userId)) {
                question.isDone = true;
            } else {
                question.isDone = false;
            }

            delete question.users;
        }),
    );
}

export { checkUserAnswers };
