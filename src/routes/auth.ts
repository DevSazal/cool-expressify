import { Router } from 'express';
import { register, login, updateProfile, login2FA } from '../controllers/auth.controller';
import { verifyToken } from '../middlewares/authMiddleware';

const router: Router = Router();

/**
 * initialize authentication routes
 */

router.post('/v1/register', register);
router.post('/v1/login', login);
router.post('/v1/login-2fa', login2FA);
router.patch('/v1/update-profile', verifyToken, updateProfile);

export { router as authAPI };
