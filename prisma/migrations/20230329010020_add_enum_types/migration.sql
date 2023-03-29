/*
  Warnings:

  - Added the required column `answer` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MaterialType" AS ENUM ('VIDEO', 'ARTICLE', 'QUESTION');

-- AlterTable
ALTER TABLE "Answer" ADD COLUMN     "answer" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "type" "MaterialType" NOT NULL DEFAULT E'ARTICLE';

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "type" "MaterialType" NOT NULL DEFAULT E'QUESTION';

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "type" "MaterialType" NOT NULL DEFAULT E'VIDEO';
