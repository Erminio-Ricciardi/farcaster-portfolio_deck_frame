import { getFrameHtmlResponse } from "@coinbase/onchainkit";
import { NextRequest, NextResponse } from "next/server";

import { NEXT_PUBLIC_SITE_URL } from "@/lib/constants";

async function getResponse(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const { id } = params;

  switch (id) {
    case "2":
      return new NextResponse(
        getFrameHtmlResponse({
          buttons: [
            {
              label: "Back",
              action: "post",
              target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/1`,
            },
            {
              label: "Next",
              action: "post",
              target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/3`,
            },
            {
              label: "Infranto",
              action: "link",
              target: `https://www.infranto.com/`,
            },
            { label: "herminius", action: "link", target: "https://herminius.eth.limo" },
          ],
          image: {
            src: `${NEXT_PUBLIC_SITE_URL}/img/frame_img/deck/infranto.gif`,
            aspectRatio: "1:1",
          },
        })
      );
    case "3":
      return new NextResponse(
        getFrameHtmlResponse({
          buttons: [
            {
              label: "Back",
              action: "post",
              target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/2`,
            },
            {
              label: "Next",
              action: "post",
              target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/4`,
            },
            {
              label: "Mahekeh",
              action: "link",
              target: `https://mahekeh.xyz/`,
            },
            { label: "herminius", action: "link", target: "https://herminius.eth.limo" },
          ],
          image: {
            src: `${NEXT_PUBLIC_SITE_URL}/img/frame_img/deck/mahekeh.gif`,
            aspectRatio: "1:1",
          },
        })
      );
    case "4":
      return new NextResponse(
        getFrameHtmlResponse({
          buttons: [
            {
              label: "Back",
              action: "post",
              target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/3`,
            },
            {
              label: "Next",
              action: "post",
              target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/5`,
            },
            {
              label: "Iurta",
              action: "link",
              target: `https://iurta.com/`,
            },
            { label: "herminius", action: "link", target: "https://herminius.eth.limo" },
          ],
          image: {
            src: `${NEXT_PUBLIC_SITE_URL}/img/frame_img/deck/iurta.gif`,
            aspectRatio: "1:1",
          },
        })
      );
    case "5":
      return new NextResponse(
        getFrameHtmlResponse({
          buttons: [
            {
              label: "Back",
              action: "post",
              target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/4`,
            },
            {
              label: "Next",
              action: "post",
              target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/6`,
            },
            {
              label: "SIDT",
              action: "link",
              target: `https://www.docentitrasporti.it/`,
            },
            { label: "herminius", action: "link", target: "https://herminius.eth.limo" },
          ],
          image: {
            src: `${NEXT_PUBLIC_SITE_URL}/img/frame_img/deck/SIDT.gif`,
            aspectRatio: "1:1",
          },
        })
      );
    case "6":
      return new NextResponse(
        getFrameHtmlResponse({
          buttons: [
            {
              label: "Back",
              action: "post",
              target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/5`,
            },
            {
              label: "Next",
              action: "post",
              target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/7`,
            },
            {
              label: "Criptolab",
              action: "link",
              target: `https://criptolab.it`,
            },
            { label: "herminius", action: "link", target: "https://herminius.eth.limo" },
          ],
          image: {
            src: `${NEXT_PUBLIC_SITE_URL}/img/frame_img/deck/criptolab.gif`,
            aspectRatio: "1:1",
          },
        })
      );
    case "7":
      return new NextResponse(
        getFrameHtmlResponse({
          buttons: [
            {
              label: "Back",
              action: "post",
              target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/6`,
            },
            {
              label: "Next",
              action: "post",
              target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/8`,
            },
            {
              label: "MonAIker",
              action: "link",
              target: `https://monaiker.art/`,
            },
            { label: "herminius", action: "link", target: "https://herminius.eth.limo" },
          ],
          image: {
            src: `${NEXT_PUBLIC_SITE_URL}/img/frame_img/deck/monaiker.gif`,
            aspectRatio: "1:1",
          },
        })
      );
    case "8":
      return new NextResponse(
        getFrameHtmlResponse({
          buttons: [
            {
              label: "Back",
              action: "post",
              target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/7`,
            },
            {
              label: "Next",
              action: "post",
              target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/9`,
            },
            {
              label: "Hydrosanitech",
              action: "link",
              target: `https://hydrosanitech.com/`,
            },
            { label: "herminius", action: "link", target: "https://herminius.eth.limo" },
          ],
          image: {
            src: `${NEXT_PUBLIC_SITE_URL}/img/frame_img/deck/hydro.gif`,
            aspectRatio: "1:1",
          },
        })
      );
      case "9":
        return new NextResponse(
          getFrameHtmlResponse({
            buttons: [
              {
                label: "Back",
                action: "post",
                target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/8`,
              },
              {
                label: "Next",
                action: "post",
                target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/10`,
              },
              {
                label: "RoBits",
                action: "link",
                target: `https://robits.xyz/`,
              },
              { label: "herminius", action: "link", target: "https://herminius.eth.limo" },
            ],
            image: {
              src: `${NEXT_PUBLIC_SITE_URL}/img/frame_img/deck/robits.gif`,
              aspectRatio: "1:1",
            },
          })
        );
        case "10":
          return new NextResponse(
            getFrameHtmlResponse({
              buttons: [
                {
                  label: "Back",
                  action: "post",
                  target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/9`,
                },
                {
                  label: "Next",
                  action: "post",
                  target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/11`,
                },
                {
                  label: "Hopera",
                  action: "link",
                  target: `https://www.hopera.xyz/`,
                },
                { label: "herminius", action: "link", target: "https://herminius.eth.limo" },
              ],
              image: {
                src: `${NEXT_PUBLIC_SITE_URL}/img/frame_img/deck/hopera.jpg`,
                aspectRatio: "1:1",
              },
            })
          );
          case "11":
            return new NextResponse(
              getFrameHtmlResponse({
                buttons: [
                  {
                    label: "Back",
                    action: "post",
                    target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/10`,
                  },
                  {
                    label: "Next",
                    action: "post",
                    target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/12`,
                  },
                  {
                    label: "ETHRome",
                    action: "link",
                    target: `https://ethrome.org/`,
                  },
                  { label: "herminius", action: "link", target: "https://herminius.eth.limo" },
                ],
                image: {
                  src: `${NEXT_PUBLIC_SITE_URL}/img/frame_img/deck/ETHRome.gif`,
                  aspectRatio: "1:1",
                },
              })
            );
    case "12":
      return new NextResponse(
        getFrameHtmlResponse({
          buttons: [
            {
              label: "Back",
              action: "post",
              target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/11`,
            },
            {
              label: "Restart",
              action: "post",
              target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/1`,
            },
            {
              label: "Taglione",
              action: "link",
              target: `https://cartotecnicataglione.com/`,
            },
            { label: "herminius", action: "link", target: "https://herminius.eth.limo" },
          ],
          image: {
            src: `${NEXT_PUBLIC_SITE_URL}/img/frame_img/deck/taglione.png`,
            aspectRatio: "1:1",
          },
        })
      );
    default:
      return new NextResponse(
        getFrameHtmlResponse({
          buttons: [
            {
              label: "Next",
              action: "post",
              target: `${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/2`,
            },
            {
              label: "Integrity Illusion",
              action: "link",
              target: `https://www.integrityillusion.com/`,
            },
            { label: "herminius", action: "link", target: "https://herminius.eth.limo" },
          ],
          image: {
            src: `${NEXT_PUBLIC_SITE_URL}/img/frame_img/deck/integrityillusion.gif`,
            aspectRatio: "1:1",
          },
        })
      );
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<Response> {
  return getResponse(req, { params });
}

export const dynamic = "force-dynamic";
